import { Router } from 'express';
const router = Router();

import { controller } from '../controllers/printers.cjs';

const {
  printDteVoucherIntoLocalServer,
  printUnsignedDteVoucherIntoLocalServer,
  printCCF,
  validatePrinterConnection,
  printTicketKitchen,
  printTicketPreAccount,
  printPackOff,
  printCFTicket,
  printInternalSaleTicket,
  printDteVoucher,
  printUnsignedDteVoucher,
  printCF,
  testPrinterConnection,
  testNetworkPrinterConnection,
  printTestPage,
  printGuideLines,
  printCharLine,
  printSaleDetailsToNetworkPrinter
} = controller;

router.get('/print-guide-lines', printGuideLines);
router.get('/print-char-line', printCharLine);

router.get('/test-network', testNetworkPrinterConnection);
router.get('/test', testPrinterConnection);
router.post('/validate-connection', validatePrinterConnection);
router.get('/testpage', printTestPage);
router.post('/ccf', printCCF);
router.post('/cf', printCF);
router.post('/cfticket', printCFTicket);
router.post('/internalsaleticket', printInternalSaleTicket);
router.post('/dtevoucher', printDteVoucher);
router.post('/unsigneddtevoucher', printUnsignedDteVoucher);
router.post('/dtevoucher-into-local-server', printDteVoucherIntoLocalServer);
router.post('/unsigneddtevoucher-into-local-server', printUnsignedDteVoucherIntoLocalServer);
router.post('/printTicketKitchen', printTicketKitchen);
router.post('/printTicketPreAccount', printTicketPreAccount);
router.post('/printPackOff', printPackOff);

router.post('/print-sale-details-to-network-printer', printSaleDetailsToNetworkPrinter)

export default router;
