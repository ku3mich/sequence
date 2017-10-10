const b = require('@ku3mich/base');

class SequenceError extends b.RethrownError {
  constructor(msg){
    super(msg);
  }
}

module.exports = SequenceError;
