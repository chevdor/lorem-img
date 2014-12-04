'use strict';
// var lib = require('./components/components');
(function(scope){
    var polymer = scope.Polymer({
      /**
       * The `noevent` event is not actually fired from here,
       * we document it as an example of documenting events.
       *
       * @event noevent
       */

      /**
       * The `notitle` attribute does not yet have a purpose.
       *
       * @attribute notitle
       * @type string
       */
      notitle: '',

      /**
       * The `aProp` is a property that does something cool.
       *
       * @property aProp
       * @type bool
       */
      bw: false,
      w: 100,
      h: 100,
      cat: null,
      txt: null,
      n: null,
      nocache: false,
      showLegend: false,

      ready: function() {
        var args = '';

        if (this.bw) {
          args += '/g';
        }

        args += '/' + this.w;
        args += '/' + this.h;

        if (this.cat && ! this.n && ! this.txt ) {
          args += '/' + this.cat;
        }

        var category;

        if (this.n) {
          category = this.cat || 'cats'; // if no cat is passed, we use cats of course...
          args += '/' + category + '/'+  this.n;
        }

        if (this.txt) {
          category = this.cat || 'cats';  // if no cat is passed, we use cats of course...
          args += '/' + category + '/' + encodeURIComponent(this.txt);
          this.showLegend = true;
        }
        
        if (this.nocache) {
          args += '?rand=' + Math.floor(Math.random() * 1000);
        }

        this.args = args;

        //console.log(args);
      },

      /**
       * The `task` method does no work at this time.
       *
       * @method task
       * @return {Object} Returns undefined.
       * @param {String} dummy Serves no purpose today.
       */
      task: function(dummy) {
        return dummy;
      }

    });

    return polymer;
})(window);
