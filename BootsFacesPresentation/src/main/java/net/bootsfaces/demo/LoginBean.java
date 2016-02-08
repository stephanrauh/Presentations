package net.bootsfaces.demo;

import java.io.IOException;
import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

import net.bootsfaces.utils.FacesMessages;

@ManagedBean
@SessionScoped
public class LoginBean implements Serializable {
	private static final long serialVersionUID = 1L;

	private boolean loggedIn = false;

	private String username = "BootsFaces";
	private String password = "";

	public boolean isLoggedIn() {
		return loggedIn;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void login() {
		if ("BootsFaces".equalsIgnoreCase(username))
			if ("rocks".equals(password)) {
				loggedIn=true;
			}
		if (loggedIn) {
				try {
					FacesContext.getCurrentInstance().getExternalContext().redirect("index2.jsf");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		else
			FacesMessages.error("This is not the correct username and password. Try again.");
	}
	
	public void resetLogin() {
		
	}
}
