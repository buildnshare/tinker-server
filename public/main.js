// Handle form submission for sending mail
document.getElementById('mailerForm').onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById('applicantName').value.trim();
    const email = document.getElementById('applicantEmail').value.trim();
    const status = document.getElementById('applicationStatus').value;
    const role = document.getElementById('role').value.trim();

    let subject = `Tinkerhub SCTCE: Kutti Core update`;
    let body;

    if (status === 'accepted') {
        body = `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Tinkerhub Kutti Core Selection Update</title>
<style>
    body {
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f3f6fb;
        margin: 0;
        padding: 0;
        color: #1a1a1a;
    }

    .email-container {
        width: 90%;
        max-width: 620px;
        margin: 40px auto;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        overflow: hidden;
        border: 1px solid #e5eaf0;
    }

    .banner {
        background: linear-gradient(135deg, #e8f1fe, #f3f8ff);
        text-align: center;
        padding: 0;
    }

    .banner img {
        width: 100%;
        height: auto;
        max-height: 220px;
        object-fit: cover;
        border-bottom: 1px solid #dce6f5;
    }

    .content {
        padding: 35px 28px;
        line-height: 1.7;
    }

    h2 {
        color: #004aad;
        margin-top: 0;
        font-size: 24px;
        font-weight: 600;
    }

    p {
        font-size: 16px;
        margin: 14px 0;
        color: #333;
    }

    a {
        color: #004aad;
        text-decoration: none;
        font-weight: 600;
    }

    a:hover {
        text-decoration: underline;
    }

    .signature {
        margin-top: 40px;
        font-weight: bold;
        color: #444;
    }

    @media (max-width: 480px) {
        .content {
            padding: 22px 16px;
        }

        .banner img {
            max-height: 160px;
        }

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 15px;
        }
    }
</style>
</head>

<body>
<div class="email-container">
    <div class="banner">
        <img src="https://drive.google.com/thumbnail?id=1WNdTCnjYvcLyMa1QAFjl60T96g4lwMwA&sz=w1000" alt="Banner" />
    </div>

    <div class="content">
        <h2>Congratulations ${name},</h2>
        <p>Welcome to <strong>Kutti Core</strong>!</p>
        <p>We are thrilled to inform you that you have been selected in our <strong>${role}</strong> role.</p>
        <p>Your enthusiasm, passion, and dedication have truly stood out, and we’re excited to have you join us on this journey of innovation and impact. Together, we’ll continue to build a vibrant tech community here at SCTCE.</p>
        <p>
            Please join our official WhatsApp group for further updates and onboarding details:
            <a href="https://chat.whatsapp.com/CHfyF8ICC7RGzSIh8CExNW?mode=ems_wa_t">click here</a>.
        </p>
        <p>We can’t wait to collaborate with you and create something amazing together. Welcome aboard, and get ready for an exciting chapter ahead!</p>
        <p>Hakuna matata ✨</p>
        <p class="signature">
            Best regards,<br />
            <span style="color:#004aad;">Tinkerhub SCTCE Core Team</span>
        </p>
    </div>
</div>
</body>
</html>
`;
    } else {
        body = `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Tinkerhub Selection Update</title>
<style>
    body {
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f3f6fb;
        margin: 0;
        padding: 0;
        color: #1a1a1a;
    }

    .email-container {
        width: 90%;
        max-width: 620px;
        margin: 40px auto;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        overflow: hidden;
        border: 1px solid #e5eaf0;
    }

    .banner {
        background: linear-gradient(135deg, #e8f1fe, #f3f8ff);
        text-align: center;
        padding: 0;
    }

    .banner img {
        width: 100%;
        height: auto;
        max-height: 220px;
        object-fit: cover;
        border-bottom: 1px solid #dce6f5;
    }

    .content {
        padding: 35px 28px;
        line-height: 1.7;
    }

    h2 {
        color: #004aad;
        margin-top: 0;
        font-size: 24px;
        font-weight: 600;
    }

    p {
        font-size: 16px;
        margin: 14px 0;
        color: #333;
    }

    .signature {
        margin-top: 40px;
        font-weight: bold;
        color: #444;
    }

    @media (max-width: 480px) {
        .content {
            padding: 22px 16px;
        }

        .banner img {
            max-height: 160px;
        }

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 15px;
        }
    }
</style>
</head>

<body>
<div class="email-container">
    <div class="banner">
        <img src="https://drive.google.com/thumbnail?id=1WNdTCnjYvcLyMa1QAFjl60T96g4lwMwA&sz=w1000" alt="Banner" />
    </div>

    <div class="content">
        <h2>Hello ${name},</h2>
        <p>
            Thank you very much for applying for the First Year Coordinator role at TinkerHub SCTCE. After careful consideration, unfortunately, you have not been shortlisted for the next round.
        </p>
        <p>
            However, we encourage you to stay involved with the community by volunteering, participating in events, and joining discussions. Your enthusiasm and contributions are valuable to us.
        </p>
        <p>
            We appreciate your effort and hope to see you actively engaged in upcoming activities. Hakuna Matata!
        </p>
        <p>Hakuna Matata</p>
        <p class="signature">
            Best regards,<br />
            <span style="color:#004aad;">Tinkerhub SCTCE</span>
        </p>
    </div>
</div>
</body>
</html>
`;
    }

    // Send to backend
    fetch('/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, body, email }),
    }).then(async (result) => {
        const data = await result.json();
        console.log(data);
        data.accepted[0] === email ? alert(`Email sent succesfully\nAddress: ${email}\nName: ${name}`) : `Email not sent`;
    });
};
