from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

app = FastAPI()

load_dotenv()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for feedback
class FeedbackForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/feedback")
async def send_feedback_email(form: FeedbackForm):
    print('Feedback Form Data Received:', form.dict())

    GMAIL_USER = 'arihantjainwebdev@gmail.com'
    GMAIL_PASSWORD = os.getenv('GMAIL_PASSWORD')

    try:
        body = f"You have received new feedback:\n\nName: {form.name}\nEmail: {form.email}\nFeedback: {form.message}"
        msg = MIMEText(body)
        msg['Subject'] = f"New Feedback from {form.name}"
        msg['From'] = form.email
        msg['To'] = GMAIL_USER

        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(GMAIL_USER, GMAIL_PASSWORD)
            server.sendmail(form.email, GMAIL_USER, msg.as_string())

        return {"message": "Feedback submitted successfully!"}

    except Exception as e:
        print('Error sending feedback email:', e)
        return {"message": "Failed to submit feedback."}