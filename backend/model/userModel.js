const mongoose = require('mongoose');

const HairSchema = new mongoose.Schema({
  color: { type: String, required: true },
  type: { type: String, required: true },
});

const CoordinatesSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const AddressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  stateCode: { type: String, required: true },
  postalCode: { type: String, required: true },
  coordinates: { type: CoordinatesSchema, required: true },
  country: { type: String, required: true },
});

const BankSchema = new mongoose.Schema({
  cardExpire: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardType: { type: String, required: true },
  currency: { type: String, required: true },
  iban: { type: String, required: true },
});

const CompanySchema = new mongoose.Schema({
  department: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  address: { type: AddressSchema, required: true },
});

const CryptoSchema = new mongoose.Schema({
  coin: { type: String, required: true },
  wallet: { type: String, required: true },
  network: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  maidenName: { type: String },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  image: { type: String },
  bloodGroup: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  eyeColor: { type: String, required: true },
  hair: { type: HairSchema, required: true },
  ip: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  macAddress: { type: String, required: true },
  university: { type: String, required: true },
  bank: { type: BankSchema, required: true },
  company: { type: CompanySchema, required: true },
  ein: { type: String, required: true },
  ssn: { type: String, required: true },
  userAgent: { type: String, required: true },
  crypto: { type: CryptoSchema, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
