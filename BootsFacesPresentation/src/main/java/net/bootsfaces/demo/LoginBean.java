package net.bootsfaces.demo;

import java.io.IOException;
import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

@ManagedBean
@SessionScoped
public class LoginBean implements Serializable {
	private static final long serialVersionUID = 1L;

	private boolean loggedIn = false;

	private String username = "";
	private String password = "";

	public boolean isLoggedIn() {
		return loggedIn;
	}

	private void setLoggedIn(boolean loggedIn) {
		this.loggedIn = loggedIn;
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
		loggedIn=false;
		if ("BootsFaces".equalsIgnoreCase(username))
			if ("rocks".equals(password)) {
				loggedIn=true;
				try {
					FacesContext.getCurrentInstance().getExternalContext().redirect("index2.jsf");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
	}
}
