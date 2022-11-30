odoo.define('ati_clear_pos_cart_memory.RemoveAllOrdersButton', function (require) {
    'use strict';
    

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require('web.custom_hooks');
    const { Gui } = require('point_of_sale.Gui');

    class RemoveAllOrdersButton extends PosComponent {
        constructor() {
            super(...arguments);
            useListener('click', this._onClick);
        }
        async _onClick() {
            this.env.pos.db.remove_all_orders()
            const { confirmed } = await Gui.showPopup("ConfirmPopup", {
                title: 'Ordenes en memoria',
                body: 'Se eliminaron correctamente las ordenes en memoria',
                confirmText: 'Aceptar', 
                cancelText: 'Cerrar',
            });
            console.log('Ordenes eliminadas')
            this.env.pos.push_orders(null, { show_error: true });
            this.env.pos.get_order().finalized = false
        }
    }


    RemoveAllOrdersButton.template = 'RemoveAllOrdersButton';


    Registries.Component.add(RemoveAllOrdersButton);
    return RemoveAllOrdersButton;
});