odoo.define('ati_clear_pos_cart_memory.RemoveAllOrdersButton', function (require) {
    'use strict';
        
    var core = require('web.core');
    var screens = require('point_of_sale.screens');
    var gui = require('point_of_sale.gui');
    
    var _t = core._t;
    var PosChrome = require('point_of_sale.chrome');
    var PosBaseWidget = require('point_of_sale.BaseWidget');
    
    // var RemoveAllOrdersButton = screens.ActionButtonWidget.extend({
    var RemoveAllOrdersButton = PosBaseWidget.extend({
        template: 'RemoveAllOrdersButton',
        init: function(parent, options) {
            this._super(parent, options);
        },
        renderElement: function(){
            var self = this;
            self._super();
            self.$el.click(function(){
                self._onClick();
            });
        },
        _onClick: function () {
            // Aquí irá la lógica para eliminar los registros
            this.pos.db.get_orders().forEach(function (order) {
                this.pos.db.remove_all_orders();
            }.bind(this));    
            this.gui.show_popup('confirm', {
            'title': _t('Ordenes en memoria'),
            'body': _t('Se eliminaron correctamente las ordenes en memoria'),
            });                        
            console.log('Ordenes eliminadas');
            this.pos.push_order();
            // Restablecer el pedido actual si es necesario
            // this.pos.get_order().finalize();
        },    
        start: function () {
            this._super.apply(this, arguments);
            this.$el.addClass('remove-all-orders-button');
        },
    });
    
    //screens.define_action_button({
    //    'name': 'remove_all_orders_button',
    //    'widget': RemoveAllOrdersButton,
    //});
    
    // return RemoveAllOrdersButton;
    PosChrome.Chrome.include({
        init: function() { 
            this._super();
            this.widgets.push(
                {
                    'name': 'RemoveAllOrdersButton',
                    'widget': RemoveAllOrdersButton,
                    'replace': '.pos-clear_cache',
                },
            )
        }
    })
});