const registermodel = require('../models/register');
const bcrypt = require("bcryptjs");
var nodemailer = require('nodemailer');

exports.register = async function (req, res) {


  const {
    name,
    email,
    number,
    password,
    confpassword,
    workstatus,
  } = req.body;
  try {
    const userexit = await registermodel.findOne({
      email: email
    });
    // const username = await registermodel.findOne({
    //   name: name
    // });
    if (userexit) {
      return res.status(422).json({
        error: "Email ID already exists!! Try other one"
      });
    } else {
      console.log("create user");
      const object = new registermodel({
        name,
        email,
        password,
        workstatus,
      });
      //  hasing of password before save
      const x = await object.save();
      console.log(req.body.email)
      if (x) {
        try {
          // 
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '20ceuof057@ddu.ac.in',
              pass: 'jay9898934789'
            }
          });

          // Define the email options
          let mailOptions = {
            from: '20ceuof057@ddu.ac.in',
            to: req.body.email,
            subject: 'Welcome to Job Seeker Family',
            html:`<!DOCTYPE html>
            <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
            
            <head>
              <title></title>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
              <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" type="text/css"><!--<![endif]-->
              <link rel="stylesheet" href="css/bootstrap.min.css">
              <link rel="stylesheet" href="css/font-awesome.min.css">
              <link rel="stylesheet" href="css/jquery-te.css">
              <link rel="stylesheet" href="css/slick.css">
              <link rel="stylesheet" href="css/main.css">
              <link rel="stylesheet" href="css/responsive.css">
              
              <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
              
              <link rel="icon" href="images/ico/favicon.ico">
              <link rel="apple-touch-icon" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
              <link rel="apple-touch-icon" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
              <link rel="apple-touch-icon" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.html">
              <link rel="apple-touch-icon" sizes="57x57" href="images/ico/apple-touch-icon-57-precomposed.png">
              
              
              
              <style>
                * {
                  box-sizing: border-box;
                }
            
                body {
                  margin: 0;
                  padding: 0;
                }
            
                a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
                }
            
                #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                }
            
                p {
                  line-height: inherit
                }
            
                .desktop_hide,
                .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
                }
            
                .image_block img+div {
                  display: none;
                }
            
                .menu_block.desktop_hide .menu-links span {
                  mso-hide: all;
                }
            
                @media (max-width:720px) {
            
                  .desktop_hide table.icons-inner,
                  .row-5 .column-1 .block-1.image_block img,
                  .social_block.desktop_hide .social-table {
                    display: inline-block !important;
                  }
            
                  .icons-inner {
                    text-align: center;
                  }
            
                  .icons-inner td {
                    margin: 0 auto;
                  }
            
                  .row-content {
                    width: 100% !important;
                  }
            
                  .mobile_hide {
                    display: none;
                  }
            
                  .stack .column {
                    width: 100%;
                    display: block;
                  }
            
                  .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                  }
            
                  .desktop_hide,
                  .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                  }
            
                  .row-3 .column-1 .block-5.paragraph_block td.pad {
                    padding: 0 20px !important;
                  }
            
                  .row-3 .column-1 .block-4.heading_block h1,
                  .row-7 .column-1 .block-2.heading_block h1 {
                    font-size: 35px !important;
                  }
            
                  .row-3 .column-1 .block-2.image_block td.pad {
                    padding: 20px 20px 0 !important;
                  }
            
                  .row-2 .column-2 .block-1.menu_block td.pad {
                    padding: 30px 10px 10px !important;
                  }
            
                  .row-2 .column-2 .block-1.menu_block .menu-links a,
                  .row-2 .column-2 .block-1.menu_block .menu-links span {
                    font-size: 16px !important;
                  }
            
                  .row-5 .column-1 .block-1.image_block .alignment {
                    text-align: center !important;
                  }
            
                  .row-6 .column-1 .block-2.heading_block h1,
                  .row-6 .column-1 .block-3.paragraph_block td.pad>div {
                    text-align: left !important;
                  }
            
                  .row-6 .column-1 .block-2.heading_block td.pad {
                    padding: 0 10px 10px 20px !important;
                  }
            
                  .row-6 .column-1 .block-3.paragraph_block td.pad {
                    padding: 0 20px 10px !important;
                  }
            
                  .row-5 .column-2 .block-1.heading_block h1 {
                    text-align: center !important;
                    font-size: 35px !important;
                  }
            
                  .row-5 .column-2 .block-1.heading_block td.pad {
                    padding: 10px 10px 0 !important;
                  }
            
                  .row-8 .column-1 .block-4.social_block td.pad,
                  .row-8 .column-2 .block-4.social_block td.pad {
                    padding: 10px 10px 30px !important;
                  }
            
                  .row-5 .column-1 {
                    padding: 5px 0 0 !important;
                  }
            
                  .row-5 .column-2 {
                    padding: 0 0 5px !important;
                  }
                }
              </style>
            </head>
            
            <body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            
              <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e5f1fd; border-radius: 0; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e5f1fd; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:20px;padding-right:20px;width:100%;">
                                            <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7906/Group_18.png" style="display: block; height: auto; border: 0; width: 175px; max-width: 100%;" width="175" alt="Placeholder Logo" title="Placeholder Logo"></a></div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="menu_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                              <tr>
                                                <td class="alignment" style="text-align:center;font-size:0px;">
                                                  <div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#003770;font-family:'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">HOME</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#003770;font-family:'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">NEWS</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#003770;font-family:'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">EVENTS</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#003770;font-family:'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">LOG IN</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e5f1fd; border-radius: 0; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <div class="spacer_block block-1 mobile_hide" style="height:40px;line-height:40px;font-size:1px;">&#8202; ${req.body.name}</div>
                                      <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                            <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7906/Group_3.png" style="display: block; height: auto; border: 0; width: 315px; max-width: 100%;" width="315" alt="Hero Image" title="Hero Image"></div>
                                          </td>
                                        </tr>
                                      </table>
                                      <div class="spacer_block block-3 mobile_hide" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                      <table class="heading_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad">
                                            <h1 style="margin: 0; color: #0274ee; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 40px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Seeker Family</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                        <tr>
                                          <td class="pad" style="padding-left:60px;padding-right:60px;">
                                            <div style="color:#003770;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
                                              <p style="margin: 0;">As a job seeker, your main goal is to secure employment that aligns with your skills, experience, and career aspirations. To achieve this, you should begin by identifying your strengths, interests, and career goals. Once you have a clear idea of what you want to do, you can start researching potential employers and job opportunities.</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                      <div class="spacer_block block-6" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0274ee; border-left: 16px solid #E5F1FD; border-radius: 0; border-right: 16px solid #E5F1FD; border-top: 30px solid #E5F1FD; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0274ee; border-left: 16px solid #E5F1FD; border-radius: 0; border-right: 16px solid #E5F1FD; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="41.666666666666664%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                            <div class="alignment" align="right" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7906/Group_4.png" style="display: block; height: auto; border: 0; width: 195px; max-width: 100%;" width="195" alt="Updates Placeholder Image" title="Updates Placeholder Image"></div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <td class="column column-2" width="58.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:30px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #003770; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 40px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">&nbsp; &nbsp; &nbsp; Company Wide&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Announcement</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0274ee; border-left: 16px solid #E5F1FD; border-radius: 0; border-right: 16px solid #E5F1FD; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <div class="spacer_block block-1 mobile_hide" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                      <table class="heading_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad">
                                            <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 25px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Big Things Are Coming</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                        <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-left:60px;padding-right:60px;">
                                            <div style="color:#ffffff;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
                                              <p style="margin: 0;">We are excited to announce that our company has recently completed a major acquisition of a leading competitor in our industry. This strategic acquisition represents a significant milestone in our growth strategy and strengthens our position as a market leader in the industry.</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad">
                                            <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:46px;width:145px;v-text-anchor:middle;" arcsize="66%" strokeweight="2.25pt" strokecolor="#003770" fillcolor="#003770"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:'Trebuchet MS', sans-serif; font-size:16px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#003770;border-radius:30px;width:auto;border-top:3px solid #003770;font-weight:400;border-right:3px solid #003770;border-bottom:3px solid #003770;border-left:3px solid #003770;padding-top:5px;padding-bottom:5px;font-family:'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">VISIT SITE</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                          </td>
                                        </tr>
                                      </table>
                                      <div class="spacer_block block-5" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e5f1fd; border-radius: 0; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                                      <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #0274ee; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 40px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Introducing Our Crew</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e5f1fd; border-radius: 0; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                            <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7906/Ellipse_1.png" style="display: block; height: auto; border: 0; width: 152px; max-width: 100%;" width="152" alt="Employee Portrait" title="Employee Portrait"></div>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #0274ee; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Developer</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #003770; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Jay Shah</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="social_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad">
                                            <div class="alignment" align="center">
                                              <table class="social-table" width="126px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                <tr>
                                                  <td style="padding:0 5px 0 5px;"><a href="github.com/jayshah2002" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/twitter@2x.png" width="32" height="32" alt="twitter" title="Github" style="display: block; height: auto; border: 0;"></a></td>
                                                  <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/in/jay-shah-83a095216/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/linkedin@2x.png" width="32" height="32" alt="linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                                  <td style="padding:0 5px 0 5px;"><a href="mailto:jaykshah2002@gmail.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/mail@2x.png" width="32" height="32" alt="E-Mail" title="E-Mail" style="display: block; height: auto; border: 0;"></a></td>
                                                </tr>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                            <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7906/Ellipse_2.png" style="display: block; height: auto; border: 0; width: 152px; max-width: 100%;" width="152" alt="Employee Portrait" title="Employee Portrait"></div>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #0274ee; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;">Developer</h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #003770; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Manav Shah</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="social_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad">
                                            <div class="alignment" align="center">
                                              <table class="social-table" width="126px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                <tr>
                                                  <td style="padding:0 5px 0 5px;"><a href="github.com/manavshah25" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/twitter@2x.png" width="32" height="32" alt="twitter" title="Github" style="display: block; height: auto; border: 0;"></a></td>
                                                  <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/in/manav-shah-28a521212" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/linkedin@2x.png" width="32" height="32" alt="linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                                  <td style="padding:0 5px 0 5px;"><a href="mailto:manavshah9890@gmail.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/mail@2x.png" width="32" height="32" alt="E-Mail" title="E-Mail" style="display: block; height: auto; border: 0;"></a></td>
                                                </tr>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                            <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7906/Ellipse_3.png" style="display: block; height: auto; border: 0; width: 152px; max-width: 100%;" width="152" alt="Employee Portrait" title="Employee Portrait"></div>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #0274ee; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;">Developer</h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
                                            <h1 style="margin: 0; color: #003770; direction: ltr; font-family: 'Noto Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Zenisha Savaliya</span></h1>
                                          </td>
                                        </tr>
                                      </table>
                                      <table class="social_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad">
                                            <div class="alignment" align="center">
                                              <table class="social-table" width="126px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                <tr>
                                                  <td style="padding:0 5px 0 5px;"><a href="github.com/zenishasavaliya" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/twitter@2x.png" width="32" height="32" alt="twitter" title="Github" style="display: block; height: auto; border: 0;"></a></td>
                                                  <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/linkedin@2x.png" width="32" height="32" alt="linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                                  <td style="padding:0 5px 0 5px;"><a href="mailto:" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-color/mail@2x.png" width="32" height="32" alt="E-Mail" title="E-Mail" style="display: block; height: auto; border: 0;"></a></td>
                                                </tr>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e5f1fd; border-radius: 0; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                          <tr>
                            <td>
                              <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;" width="700">
                                <tbody>
                                  <tr>
                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                      <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                              <tr>
                                                <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                  <!--[if !vml]><!-->
                                                  <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                                    <tr>
                                                      <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                      <td style="font-family: Noto Sans, Trebuchet MS, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;">Copyright @Seeker.com</a></td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </body>
            
            </html>`
          };
          console.log(mailOptions)
          // Send the email
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          //})
        } catch (error) {
          console.log(error.message);
        }
      }
      return res.status(200).json({
        message: "register sucessfully"
      });


    }
  } catch (err) {
    console.log(err);
  }

}
exports.auth = async function (req, res) {
  console.log("hello login")
  const {
    email,
    password,
  } = req.body;
  try {
    const userlogin = await registermodel.findOne({
      email: email
    });

    if (!userlogin) {
      return res.status(400).json({
        error: "invailad crenteidatisl"
      });
    } else {
      // console.log(userlogin.password);
      // console.log(password);
      const ismatch = await bcrypt.compare(password, userlogin.password);
      // console.log(ismatch);
      if (!ismatch) {
        return res.status(400).json({
          error: "invaild credientails"
        });
      } else {
        console.log("genrate employee");
        token = await userlogin.generateAuthToken();
        const obj = {
          message: "user sucesfully",
          token: token,
          loginuser: userlogin,
        };

        return res.status(201).json(obj);

      }
    }

  } catch (err) {
    console.log(err);
  }

}