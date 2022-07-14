// create a Smile P1 session, login to device, fetch meter readings

const Smile = require('smilep1');
// Import the Tado client
const Tado = require('node-tado-client');

const smile = new Smile();

// Create a new Tado instance
var tado = new Tado();

const getOptions = () => {
	const options = {};
	const args = process.argv.slice(2);
	Object.keys(args).forEach((arg) => {
		const info = args[arg].split(/=+/g);
		if (info.length === 2) {
			options[info[0]] = info[1].replace(/['"]+/g, '');
		}
	});

	if (Object.keys(options).length === 0) {
		options.password = process.argv[2];
		options.host = process.argv[3];
		options.port = process.argv[4];
	}

	if (options.port) {
		options.port = Number(options.port);
	}

	// if (options.tls) {
	// 	options.tls = options.tls.toLowerCase() === 'true';
	// }

	if (options.reversed && options.reversed !== 'false') options.reversed = true;
	return options;
};

const options = getOptions();

async function getMeterReadings(options, home_id) {
	try {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = yyyy + '-' + mm + '-' + dd;

		// fill in the id of the device, e.g. 'hcfrasde'
		// fill in the ip address of the device, e.g. '192.168.1.50'
		await smile.login({ id: options.id, host: options.host });
		const powerInfo = await smile.getMeterReadings();
		//console.log(powerInfo);

		tado.addEnergyIQMeterReading(home_id, today, parseInt(Math.round(powerInfo.gas), 10));

	} catch (error) {
		console.log(error);
	}
}

// Login to the Tado Web API
tado.login(options.username, options.password).then(() => {
	tado.getMe().then(resp => {
		home_id = resp.homes[0].id;
		//tado.deleteEnergyIQMeterReading(home_id, 'bd3479cc-066e-40fc-a489-62f8a20ed02b');
		//tado.getEnergyIQMeterReadings(home_id).then(resp => {
		//	console.log(resp);
		//});
		getMeterReadings(options, home_id);
	});
});
