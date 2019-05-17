// import * as XLSX from 'xlsx';
//
// export function loadFile() {
//     return new Promise(function (resolve, reject) {
//         const oReq = new XMLHttpRequest();
//         oReq.open('GET', url, true);
//         oReq.responseType = 'arraybuffer';
//
//         oReq.onload = function (e) {
//             const arraybuffer = oReq.response;
//
//             /* convert data to binary string */
//             const data = new Uint8Array(arraybuffer);
//             const arr = [];
//             for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
//             const bstr = arr.join('');
//
//             /* Call XLSX */
//             const workbook = XLSX.read(bstr, {
//                 type: 'binary'
//             });
//
//             /* DO SOMETHING WITH workbook HERE */
//             var first_sheet_name = workbook.SheetNames[0];
//             /* Get worksheet */
//             var worksheet = workbook.Sheets[first_sheet_name];
//             console.log(XLSX.utils.sheet_to_json(worksheet, {
//                 raw: true
//             }));
//         };
//
//         oReq.send();
//     });
// }