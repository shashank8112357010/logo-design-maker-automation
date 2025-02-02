module.exports.eveningEmail = (username) => {
    return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
        /* Global CSS styles */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }

        .container {
            margin: 0 auto;
            max-width: 600px;
            padding: 20px;
            background: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: #4b2179;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        .header h1 {
            margin: 0;
        }

        .content {
            padding: 20px 0;
            text-align: center;
        }

        .content img {

            margin-bottom: 20px;
        }

        .footer {
            background: #4b2179;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="header">
            <h1>Welcome to Our Service!</h1>
        </div>

        <div class="content">
            <h2>Hello, ${username}
            </h2>

            <img src="https://tse2.mm.bing.net/th?id=OIP.0EdPEtEPPPtvGqThqTPcewHaE8&pid=Api&P=0&h=180"
                alt="Welcome Image" height="240px" width="300px">

            <p>
                Good evening, ${username}. Hope you had a great day!!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quod nam. Vitae aliquam recusandae
                cumque illo quis voluptates provident? Exercitationem nobis fugiat libero ad repellat enim dolorem omnis
                sequi eaque maxime quam molestiae nulla temporibus iusto incidunt mollitia, maiores odio vel, aliquid
                qui repudiandae recusandae quisquam beatae! 
            </p>

            <p>
                <a href="#" style="background: #4b2179; color: #fff; padding: 10px 20px; text-decoration: none;
                border-radius: 5px;">Get Started</a>
            </p>
        </div>

        <div class="footer">
            <p>Footer &copy; 2024</p>
        </div>
    </div>

</body>

</html>
    `
}