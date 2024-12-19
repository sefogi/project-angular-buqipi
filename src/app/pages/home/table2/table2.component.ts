import { Component,OnInit } from "@angular/core";

interface TableRow {
    feature: string;
    values: string[];
    important:boolean;
}

@Component({
    selector: 'app-home-table2',
    templateUrl: './table2.component.html',
    styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {
    isFullView = true;
    tableHeaders: string[] = ['Buqipi', '/assets/logos/logo11.png', '/assets/logos/redforts.svg', '/assets/logos/amenitiz.svg', '/assets/logos/avirato.png', '/assets/logos/little.svg', '/assets/logos/smoobu.png', '/assets/logos/octare.png'];
    tableData: TableRow[] = [];
    displayedTableData: TableRow[] = [];



  ngOnInit() {
    this.tableData = [ // Datos de la tabla
      { feature: '', values: ['', '', '', '', 'CHANNEL MANAGER', '', '', '', ''],important:false },
      { feature: 'Portales', values: ['+255 Directos', '10 Directos', '+70 Directos', '+110 Directos', '+70 Directos', '+110 Directos', '+70 Directos', '+110 Directos'],important:false },
      { feature: 'Sincronización', values: ['< 1 Minuto', '> 5 Minutos', '> 3 Minutos', '> 3 Minutos', '> 3 Minutos', '> 3 Minutos', '> 3 Minutos', '> 3 Minutos'],important:false },
      { feature: 'Multipropiedad sin coste adicional', values: ['✅', '✅', '❌', '✅', '✅', '❌', '❌', '❌'],important:false },
      { feature: 'Reglas automaticas de precios sin coste adicional', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Conexión con Google gratis y sin comisiones', values: ['✅', '❌', '❌', '✅', '✅', '❌', '❌', '❌'],important:false },
      { feature: '', values: ['', '', '', '', 'MOTOR DE RESERVAS', '', '', '', ''],important:false },
      { feature: 'Personalizable en logo y colores gratis', values: ['✅', '❌', '✅', '✅', '✅', '❌', '✅', '✅'],important:false },
      { feature: 'Dominio personalizable gratis', values: ['✅', '❌', '❌', '✅', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Diseño testado para aumentar la conversión', values: ['✅', '❌', '❌', '❌', '❌', '✅', '❌', '✅'],important:false },
      { feature: 'Reservas sin comisiones', values: ['✅', '❌', '❌', '✅', '✅', '✅', '✅', '✅'],important:false },
      { feature: '', values: ['', '', '', '', 'PSM', '', '', '', ''],important:false },
      { feature: 'Cuadrante de reservas', values: ['✅', '❌', '✅', '✅', '✅', '✅', '✅', '✅'],important:false },
      { feature: 'Facturación', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '✅'],important:false },
      { feature: 'Mensajería', values: ['✅', '✅', '❌', '✅', '❌', '✅', '✅', '✅'],important:false },
      { feature: 'Generación de contratos', values: ['✅', '❌', '❌', '❌', '✅', '❌', '❌', '❌'],important:false },
      { feature: 'Check-in online', values: ['✅', '❌', '✅', '✅', '❌', '✅', '✅', '❌'],important:false },
      { feature: 'Firma online de contratos', values: ['✅', '❌', '❌', '❌', '❌', '❌', '✅', '❌'],important:false },
      { feature: 'Check-in presencial', values: ['✅', '❌', '✅', '✅', '✅', '✅', '❌', '✅'],important:false },
      { feature: 'Firma en tableta Wacom', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Estadistica y reportes', values: ['✅', '❌', '✅', '✅', '✅', '✅', '✅', '✅'],important:false },
      { feature: 'Conexión con I.N.E.', values: ['✅', '❌', '✅', '❌', '✅', '❌', '❌', '❌'],important:false },
      { feature: 'Cerraduras electronicas Nuki y Ttlock', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Generación de codigo (cerradura) en check-in online', values: ['✅', '❌', '✅', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Modulo de limpieza / partes', values: ['✅', '❌', '✅', '❌', '✅', '❌', '❌', '✅'],important:false },
      { feature: '', values: ['', '', '', '', 'MENSAJES', '', '', '', ''] ,important:false},
      { feature: 'Envio automático confirmación / cancelación', values: ['✅', '❌', '✅', '✅', '❌', '❌', '✅', '✅'],important:false },
      { feature: 'Plantillas personalizadas ilimitadas', values: ['✅', '❌', '❌', '✅', '✅', '❌', '✅', '✅'] ,important:false},
      { feature: 'Programación de plantillas (antes/después check-in)', values: ['✅', '❌', '✅', '✅', '❌', '❌', '✅', '✅'],important:false },
      { feature: '', values: ['', '', '', '', 'PAGOS', '', '', '', ''],important:false },
      { feature: 'Pasarela propia, puedes cobrar desde el alta. sin esperas', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Conexión por redys sin coste adicional', values: ['✅', '❌', '❌', '❌', 'Sólo pago online motor', '❌', '❌', '❌'],important:false },
      { feature: 'Servicio cobro no obligatorio', values: ['✅', '❌', '✅', '❌', '✅', '✅', '✅', '✅'],important:false },
      { feature: 'Pagos 3DS (seguros) y pagos a distancia', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Reglas de cobro personalizadas y automáticas', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Fianzas (preautorizaciones) y validación de tarjeta', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
      { feature: 'Guardado y visualización seguro de tarjetas', values: ['✅', '❌', '✅', '✅', '✅', '✅', '✅', '✅'],important:false },
      { feature: 'Gestión de tarjetas no válidas en Booking.com', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
       { feature: '', values: ['', '', '', '', 'APLICACIÓN ANDROID', '', '', '', ''],important:false },
      { feature: 'Escáner de documentos y pasaportes', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
       { feature: 'Mismas funcionalidades que en PC', values: ['✅', '✅', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
       { feature: '', values: ['', '', '', '', 'APLICACIÓN IPHONE', '', '', '', ''],important:false },
      { feature: 'Escáner de documentos y pasaportes', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
       { feature: 'Mismas funcionalidades que en PC', values: ['✅', '✅', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
       { feature: '', values: ['', '', '', '', 'CUENTA', '', '', '', ''],important:false },
      { feature:  'Usuarios ilimitados', values: ['✅', '❌', '❌', '✅', '✅', '✅', '❌', '❌'],important:false },
       { feature: 'Roles de usuario', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
       { feature: 'Usuarios para propiedades / categorías especificas', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false },
       {feature: 'Inicio de sesión sin contraseña', values:['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],important:false},
       {feature: 'Notificaciones de reserva en todos los dispositivos', values:['✅', '✅', '❌', '✅', '❌', '✅', '✅', '❌'],important:false},
       {feature: 'Dispositivos ilimitados', values:['✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],important:false},
       {feature: '', values: ['', '', '', '', 'SOPORTE Y ATT CLIENTE', '', '', '', ''],important:false},
       {feature: 'Misma persona encargada de tu cuenta', values:['✅', '✅', '❌', '❌', '❌', '❌', '❌', '❌'],important:false},
       {feature: 'Atención personalisada por whatsapp', values:['✅', '✅', '❌', '❌', '❌', '❌', '❌', '❌'],important:false},
       {feature: 'Atención personalizada por teléfono', values:['✅', '❌', '✅', '✅', '✅', '✅', '✅', '❌'],important:false},
       {feature: 'Atención personalizada por correo', values:['✅', '❌', '✅', '✅', '✅', '✅', '✅', '✅'],important:false},
       {feature: 'SLA(Respuesta ante incidentes', values:['< 8 Horas 365/365','Sin SLA', 'Sin SLA','Sin SLA','Sin SLA','Sin SLA','Sin SLA', 'Sin SLA'], important:false}
       ];
    
       this.displayedTableData = this.tableData; // Inicializar los datos mostrados
  }

  toggleView() {
    this.isFullView = !this.isFullView;
    if (!this.isFullView) {
      this.displayedTableData = this.tableData.filter(row=> row.important);
    } else {
      this.displayedTableData = this.tableData;
    }
  }
}



