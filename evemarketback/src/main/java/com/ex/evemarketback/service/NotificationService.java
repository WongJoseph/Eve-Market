package com.ex.evemarketback.service;

import com.ex.evemarketback.domain.User;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

public class NotificationService {


    public void passResetEmail(User user, String newPass) {
        try {
            String host = "smtp.gmail.com";
            String users = "evemarketnotification";
            String pass = "revlearning";
            String to = user.getEmail();
            String from = "evemarketnotification@gmail.com ";
            String subject = "Your password reset request";
            String messageText = ("Your password has been reset to: \n\n"
                    + newPass + "\n\nPlease use this password to login and update your password");
            boolean sessionDebug = false;

            Properties prop = System.getProperties();

            prop.put("mail.smtp.starttls.enable", "true");
            prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
            prop.put("mail.smtp.host", host);
            prop.put("mail.smtp.port", "587");
            prop.put("mail.smtp.auth", "true");
            prop.put("mail.smtp.starttls.required", "true");

            java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
            Session mailSession = Session.getDefaultInstance(prop, null);
            mailSession.setDebug(sessionDebug);
            Message msg = new MimeMessage(mailSession);
            msg.setFrom(new InternetAddress(from));
            InternetAddress[] addresses = {new InternetAddress(to)};
            msg.setRecipients(Message.RecipientType.TO, addresses);
            msg.setSubject(subject);
            msg.setSentDate(new Date());
            msg.setText(messageText);

            Transport transport = mailSession.getTransport("smtp");
            transport.connect(host, users, pass);
            transport.sendMessage(msg, msg.getAllRecipients());
            transport.close();
            System.out.println("Message Sent");

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}
