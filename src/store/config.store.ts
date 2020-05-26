const config_poduction = {
	Kronio: 'https://app.kronio.io',
	TaquionAuth: 'https://auth.taquionsoft.com',
	TaquionEnterprise: 'https://enterprise.taquionsoft.com',
};
const config_developed = {
	Kronio: 'http://192.34.60.171:9000/',
	TaquionAuth: 'http://192.34.60.171:9001/',
	TaquionEnterprise: 'http://192.34.60.171:9002/',
};
const config = process.env.NODE_ENV === 'production' ? config_poduction : config_developed;

export default config;
