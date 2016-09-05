var _ = require('lodash');
var knex = require('lib/knex');
var bookshelf = require('bookshelf')(knex);

module.exports = function (instanceProps, staticProps) {

  // Add to instance property
  baseInstanceProps = {

    _toJSON: function(){
      return bookshelf.Model.prototype.toJSON.call(this);
    },

    _fetch: function(){
      return bookshelf.Model.prototype.fetch.call(this, ...arguments);
    },

    _fetchAll: function(){
      return bookshelf.Model.prototype.fetchAll.call(this, ...arguments);
    },

  };

  // Add to static property
  baseStaticProps = {};

  var _bookshelf = bookshelf.Model.extend(
    _.extend(instanceProps, baseInstanceProps), 
    _.extend(staticProps || {}, baseStaticProps)
  );

  _bookshelf.knex = knex;
  return _bookshelf;
};
