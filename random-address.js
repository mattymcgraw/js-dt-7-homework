var streetNumber = Math.floor(Math.random()*90000) + 10000;
var streetName = ['Second', 'Third', 'First', 'Fourth', 'Park', 'Fifth', 'Main', 'Sixth', 'Oak', 'Seventh', 'Pine', 'Maple', 'Cedar', 'Eighth', 'Elm', 'View', 'Washington', 'Ninth', 'Lake', 'Hill'];
var randomStName = streetName[Math.floor(Math.random() * streetName.length)];
var streetType = ['Place', 'Road', 'Avenue', 'Court', 'Street', 'Drive'];
var randomStType = streetType[Math.floor(Math.random() * streetType.length)];
var cityName = ['Gotham City', 'Metropolis', 'Bludhaven', 'Duckburg', 'District X', 'Riverdale', 'Smallville', 'Star City', 'Central City', 'Zion', 'Emerald City', 'Hill Valley', 'Mos Eisley', 'Coruscant', 'Cabot Cove', 'Sunnydale', 'City of Townsville', 'South Park', 'Springfield', 'Quahog']
var randomCity = cityName[Math.floor(Math.random() * cityName.length)];
var stateAbbrev = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'GU', 'PR', 'VI'];
var randomState = stateAbbrev[Math.floor(Math.random() * stateAbbrev.length)];
var zipCode = Math.floor(Math.random()*90000) + 10000;

console.log(streetNumber+" "+randomStName+" "+randomStType+", "+randomCity+" "+randomState+", "+zipCode);