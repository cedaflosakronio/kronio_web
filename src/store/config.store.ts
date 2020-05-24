const config =
	process.env.NODE_ENV === 'production'
		? {
			Kronio: 'https://app.kronio.io',
			TaquionAuth: 'https://auth.taquionsoft.com',
			TaquionEnterprise: 'https://enterprise.taquionsoft.com',
		  }
		: {
			Kronio: 'http://192.34.60.171:9000/',
			TaquionAuth: 'http://134.122.0.176:9000/',
			TaquionEnterprise: 'http://192.34.60.171:9002/',
		  };

export default config;
