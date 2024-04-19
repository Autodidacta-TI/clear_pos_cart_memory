# -*- coding: utf-8 -*-
{
    'name': 'Clear POS Cart Memory',
    'version': '11.0',
    'author': 'Ivan Arriola - Autodidacta TI',
    'category': 'POS',
    'summary': 'Limpia memoria del carrito en POS',
    'license': 'OPL-1',
    'website': 'https://autodidactati.com',
    'depends': ['base', 'point_of_sale'],
    'data': [
        'views/templates.xml',
        # 'static/src/js/remove_all_orders_button.js',
        # 'static/src/xml/remove_all_orders_button_view.xml',
    ],
    'qweb': [
        'static/src/xml/remove_all_orders_button_view.xml',
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
}