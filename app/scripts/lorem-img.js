'use strict';
// var lib = require('./components/components');
(function(scope) {
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
         * When `bw` is true, the image will be black & white.
         *
         * @property bw
         * @type bool
         */
        bw: false,

        /**
         * `w` is the width of the image
         *
         * @property w
         * @type int
         */
        w: 100,

        /**
         * `h` is the height of the image
         *
         * @property h
         * @type int
         */
        h: 100,

        /**
         * `cat` is the category of image.
         *
         * @property cat
         * @type string
         */
        cat: null,

        /**
         * Optional: Text for the image.
         *
         * @property txt
         * @type string
         */
        txt: null,

        /**
         * Optional: Force picking the `n`th image of the set.
         *
         * @property n
         * @type int
         */
        n: null,

        /**
         * When provided, this attribute ensure that the cache is not used for
         * other images with the same property. Obviously, there is a bandwidth penalty.
         *
         * @property nocache
         * @type bool
         */
        nocache: false,

        ready: function() {
            var args = '';

            if (this.bw) {
                args += '/g';
            }

            args += '/' + this.w;
            args += '/' + this.h;

            if (this.cat && !this.n && !this.txt) {
                args += '/' + this.cat;
            }

            var category;

            if (this.n) {
                category = this.cat || 'cats'; // if no cat is passed, we use cats of course...
                args += '/' + category + '/' + this.n;
            }

            if (this.txt) {
                category = this.cat || 'cats'; // if no cat is passed, we use cats of course...
                args += '/' + category + '/' + encodeURIComponent(this.txt);
                this.showLegend = true;
            }

            if (this.nocache) {
                args += '?rand=' + Math.floor(Math.random() * 1000);
            }

            this.args = args;

            //console.log(args);
        },

        heightChanged: function() {
            this.reload();
        },
        widthChanged: function() {
            this.reload();
        },
        reload: function() {
            if (this.height > 0 && this.width > 0) {
                this.$.image.src = 'http://lorempixel.com/' + this.width + '/' + this.height + '/nature';
            }
        },

    });

    return polymer;
})(window);
