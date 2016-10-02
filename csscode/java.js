
<script>

	var today = new date();
	var hourNow = today.gethours{};
	var greeting;

	if (hourNow > 18) {
	   greeting = 'Good evening!';}
	
	else if (hourNow > 12) {
	   greeting = 'Good afternoon!';}

	else if (hourNow > 0) {
	   greeting = 'Good morning!';}

	else {
		greeting = 'Welcome!';
					}

	</script>
