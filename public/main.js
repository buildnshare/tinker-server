// Handle form submission for sending mail
document.getElementById('mailerForm').onsubmit = function (event) {
  event.preventDefault();

  // Collect form input values
  const name = document.getElementById('applicantName').value.trim();
  const email = document.getElementById('applicantEmail').value.trim(); // Not used, but collected
  const status = document.getElementById('applicationStatus').value;
  const role = document.getElementById('role').value.trim();

  // Build email subject and body
  let subject, body;
  subject = `TinkerHub Core Team Selection update`;
  if (status === 'accepted') {
    body = `
     <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tinkerhub Selection Update</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
            color: #333;
        }

        .email-container {
            width: 90%;
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }

        .banner {
            background-color: #e6f0fa;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }

        .banner img {
            width: 100%;
            height: auto;
            max-height: 200px;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        }

        .content {
            padding: 30px 20px;
            line-height: 1.7;
        }

        h2 {
            color: #004aad;
            margin-top: 0;
        }

        p {
            font-size: 16px;
            margin: 16px 0;
        }

        .signature {
            margin-top: 40px;
            font-weight: bold;
            color: #444;
        }

        /* Responsive tweak for small screens */
        @media (max-width: 480px) {
            .content {
                padding: 20px 15px;
            }

            .banner img {
                max-height: 150px;
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
        <!-- Banner image -->
        <div class="banner">
            <img src="https://drive.google.com/thumbnail?id=1WNdTCnjYvcLyMa1QAFjl60T96g4lwMwA&sz=w1000" alt="Banner" />
        </div>

        <div class="content">
            <h2>Hello ${name},</h2>
            <p>
                We are pleased to announce that you are selected as a core team member at Tinkerhub SCTCE.
                We are glad to onboard you on the core team. Hope you have read the Tinkerhub wiki.
            </p>
            <p>
                We are also inviting you to the friendly meetup of core team members from different colleges at Tinkerspace. 
                This is a mandatory event and we will reconsider your selection if you are not able to attend the event.
                You will take up the responsibility of ${role} from the day that will be mentioned in the core team meeting.
            </p>
            <p>
                Looking forward for a wonderful adventure at SCT. Hakuna Matata. Let's start tinkering.
            </p>
            <p class="signature">
                Best regards,<br />
                Kevin<br />
                Tinkerhub SCTCE Campus Lead
            </p>
        </div>
    </div>
</body>

</html> `;
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
            font-family: Arial, sans-serif;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
            color: #333;
        }

        .email-container {
            width: 90%;
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }

        .banner {
            background-color: #e6f0fa;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }

        .banner img {
            width: 100%;
            height: auto;
            max-height: 200px;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        }

        .content {
            padding: 30px 20px;
            line-height: 1.7;
        }

        h2 {
            color: #004aad;
            margin-top: 0;
        }

        p {
            font-size: 16px;
            margin: 16px 0;
        }

        .signature {
            margin-top: 40px;
            font-weight: bold;
            color: #444;
        }

        /* Responsive tweak for small screens */
        @media (max-width: 480px) {
            .content {
                padding: 20px 15px;
            }

            .banner img {
                max-height: 150px;
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
        <!-- Banner image -->
        <div class="banner">
            <img src="https://drive.google.com/thumbnail?id=1WNdTCnjYvcLyMa1QAFjl60T96g4lwMwA&sz=w1000" alt="Banner" />
        </div>

        <div class="content">
            <h2>Hello ${name},</h2>
            <p>
                Thank you very much for applying for the Tinkerhub core team at SCTCE. After careful consideration, unfortunately, you have not been selected as a core team member this time.
            </p>
            <p>
                However, we encourage you to stay involved with the community by volunteering, participating in events, and joining discussions. Your enthusiasm and contributions are valuable to us.
            </p>
            <p>
                We appreciate your effort and hope to see you actively engaged in upcoming activities. Hakuna Matata!
            </p>
            <p class="signature">
                Best regards,<br />
                Kevin <br />
                Tinkerhub SCTCE Campus Lead
            </p>
        </div>
    </div>
</body>

</html>

    `;
  }

  // Send email content and access token to backend
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user, user.email);
  fetch('/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subject,
      body,
      email,
    }),
  }).then((result) => console.log('Mail send result:', result));
};
