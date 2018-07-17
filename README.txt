
employee-add
--------------
	- To register a newly added employee-add
	- Takes the id of newly added employee from the employee Service.
	- Import angular forms for form validation
	
employee-edit
------------
	- To edit an existing employee
	- Routed from employee-list

employee-list
-------------
	- Displays all the existing employees got from employee Service
	- Gives option to add , delete and edit employees.
	


Utils
-----
	pop-up component
	----------------
			- Holder of dynamic components to be created upon action by users(In our case holder of Alert Component)
	
	Alert Component
	---------------
			- Dynamic component that automatically get created and destroyed upon user's action


Pipes
----
	number-validate pipe
	-------------------
			- Custom pipe to detemine whether the passed value is a number and qualiefies for phone no.(10 digit)
			
			
Employee-Service
----------------
	- Service that takes the data from locally hosted employee.json and provide service to all the comonents declared in the app- module.

	
Assets:
-------
	employee.json
	--------------
		- Contains employee details in json format
		