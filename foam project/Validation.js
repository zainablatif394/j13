$(document).ready(function() {
		var name     = "";
		var email    = "";
		var password = "";
		var confirm  = "";
		var name_pattern = /^[a-z]+$/i;
		var email_pattern = /^[a-z]+[0-9a-zA-Z_\.]*@[a-z_]+\.[a-z]+$/;
		var password_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

		$("#name").focusout(function(){
			var store = $.trim($("#name").val());
			if(store.length == ""){
				$(".error-name").html("Name is required!");
				$("#name").addClass("border-red");
				name = "";
			}else if(name_pattern.test(store)){
				$(".error-name").html("");
				$("#name").addClass("border-green");
				$("#name").removeClass("border-red");
				name = store;
			}else{
			$(".error-name").html("Integer is not allowed!");
			$("#name").addClass("border-red");
			$("#name").removeClass("border-green");
			name = ""; 
		}
	}); // close name field

			$("#email").focusout(function(){
			var email_store = $.trim($("#email").val());
			if(email_store.length == ""){
	        	$(".error-email").html("Email is required!");
		    	$("#email").addClass("border-red");
			    $("#email").removeClass("border-green");
			    email = "";
		    } 
		    else if(email_pattern.test(email_store)){
		    	$.ajax({
		    		type : 'POST', 
		    		url  : 'ajax/signup.php',
		    		data : {'check_email' : email_store},
		    		dataType : 'JSON',
		    		beforeSend : function(){
	                $(".error-email").html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
	                },
		    		data : {'check_email' : email_store},
	                success : function(feedback){
	                	setTimeout(function(){
	                    if(feedback['error'] == 'email_success'){
	               			$(".error-email").html("<div class='text-success'><i class='fa fa-check-circle'></i> available</div>");
		                    $("#email").addClass("border-green");
		                   $("#email").removeClass("border-red");
		                    email = email_store;
	                	}
	                	else if(feedback['error'] == 'email_fail'){
	                		$(".error-email").html("<div class=''><i class='fa fa-exclamation-circle'></i> Sorry this email is already exist!</div>");
		                    $("#email").addClass("border-red");
		                    $("#email").removeClass("border-green");
		                    email = "";
		                }
	                	},3000);
		            }
	        	});
		    } 
		    else {
			    $(".error-email").html("Invalid Email Formate!");
			    $("#email").addClass("border-red");
			    $("#email").removeClass("border-green");
			    email = "";
	        }
	        
	    }); // close name field

	    $("#password").focusout(function(){
		    var password_store = $.trim($("#password").val());
		    if(password_store.length == ""){
		        $(".error-password").html("Password is required!");
		        $("#password").addClass("border-red");
		        $("#password").removeClass("border-green");
		        password = "";
		    }else if(password_pattern.test(password_store)){
		        $(".error-password").html("<div class='text-success'><i class='fa fa-check-circle'></i> Your Password Is Strong!</div>");
		        $("#password").addClass("border-green");
		        $("#password").removeClass("border-red");
		        password = password_store;
		    }else{
		        $(".error-password").html("8 characters or longer. Combine upper and lowercase letters and numbers");
		        $("#password").addClass("border-red");
		        $("#password").removeClass("border-green");
		        password = "";
		    }
    	})//Close Password Validations

    	// Validate Confirm Password
	    $("#confirm").focusout(function(){
		     var confirm_store = $.trim($("#confirm").val());
		     if(confirm_store.length == ""){
		     $(".error-confirm").html("Confirm Password is required!");
		     $("#confirm").addClass("border-red");
		     $("#confirm").removeClass("border-green");
		     confirm = "";  
		     } else if(confirm_store != password){
		     $(".error-confirm").html("Password is not matched!");
		     $("#confirm").addClass("border-red");
		     $("#confirm").removeClass("border-green");
		     confirm = "";
		     }else{
		     $(".error-confirm").html("");
		     $("#confirm").addClass("border-green");
		     $("#confirm").removeClass("border-red");
		     confirm = confirm_store;
		     }
	    })//Close Confirm Password

	    // * === Submit the form === *
	    $("#submit").click(function(){
		    if(name.length == ""){
		    $(".error-name").html("Name is required!");
		    $("#name").addClass("border-red");
		    $("#name").removeClass("border-green");
		    name = "";  
		    }

		    if(email.length == ""){
		    $(".error-email").html("Email is required!");
		    $("#email").addClass("border-red");
		    $("#email").removeClass("border-green");
		    email = ""; 
		    }

		    if(password.length == ""){
		    $(".error-password").html("Password is required!");
		    $("#password").addClass("border-red");
		    $("#password").removeClass("border-green");
		    password = "";  
		    }

		    if(confirm.length == ""){
		    $(".error-confirm").html("Confirm Password is required!");
		    $("#confirm").addClass("border-red");
		    $("#confirm").removeClass("border-green");
		    confirm = "";   
		    }

		    if(name.length != "" && email.length != "" && password.length != "" && confirm.length != ""){
			
				 $.ajax({
				            type : 'POST',
				            url  : 'ajax/signup.php?signup=true',
				            data : $("#signup_submit").serialize(),
				            dataType : 'JSON',
				            beforeSend : function(){
				            $(".show-progress").addClass('progress')
				            },
				            success : function(feedback){
				               setTimeout(function(){
					               if(feedback['error'] == "success"){
					                location = feedback.msg;   
					                }
				                },3000)
				            }
        				})

			}
		})

});