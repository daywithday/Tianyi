L.Control.GameTime = L.Control.extend({
        options: {
                position: 'bottomright'
        },

        onAdd: function (map) {
                var name = 'control-gametime',
                    container = L.DomUtil.create('div', name + ' webmap-control');

                container.innerHTML = "Loading ..."
                L.DomEvent.on (container, 'mousemove', L.DomEvent.stopPropagation);

                this._map = map;
                this._div = container;

                window.setTimeout($.proxy(this._updateGameTimeEvent, this), 0);

                return container;
        },

        onRemove: function (map) {
        },

        _updateGameTimeEvent: function() {
                window.setTimeout($.proxy(this._updateGameTimeEvent, this), 2000);
        }

});

