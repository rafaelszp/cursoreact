const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/money');

mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório";
mongoose.Error.messages.Number.min = "[{VALUE}] informado para o atributo [{PATH}] é menor que o limite mínimo [{MIN}]";
mongoose.Error.messages.Number.max = "[{VALUE}] informado para o atributo [{PATH}] é maior que o limite máximo [{MAX}]";
mongoose.Error.messages.String.enum = "[{VALUE}] não é suportado para o atributo [{PATH}]";