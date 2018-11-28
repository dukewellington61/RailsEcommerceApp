# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
	def contact_email
    	UserMailer.contact_email("John", "john@example.com", "Test Subject", "Hello World!")
	end

	def order_recieved_email
		UserMailer.order_recieved_email("john@example.com", "John", Order.first)
  	end
end