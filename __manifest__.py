# -*- coding: utf-8 -*-
{
    'name': 'Clear POS Cart Memory',
    'version': '15.0',
    'author': 'Ivan Arriola - Autodidacta TI',
    'category': 'POS',
    'summary': 'Limpia memoria del carrito en POS',
    'license': 'OPL-1',
    'website': 'https://autodidactati.com',
    'depends': ['point_of_sale'],
    'data': [
    ],
    'assets': {
        'point_of_sale.assets' : ['ati_clear_pos_cart_memory/static/src/js/remove_all_orders_button.js'],
        'web.assets_qweb' : ['ati_clear_pos_cart_memory/static/src/xml/remove_all_orders_button_view.xml'],
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}
