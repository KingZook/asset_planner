function listIntoTable(table, data) {
    let elem = document.getElementById(table);
    let table_struct = "";
    table_struct += "<tbody>\n";
    for(d in data){
        table_struct += "<tr>\n";
        for(e in data[d]) {
            if( d == 0) table_struct += `<th> ${data[d][e]} </th>`;
            else table_struct += `<td> ${data[d][e]} </td>`;
        }
        table_struct += "</tr>\n";
    }
    table_struct += "</tbody>\n";
    elem.innerHTML = table_struct;
}

function extract_account_info(jsontext){
    let cols = ["Account_name", "Balance", "Type", "CreationDate"];
    let dat  = [cols]
    let inp = JSON.parse(jsontext);
    for(acc in inp.data){
        dat.push([
            inp.data[acc].attributes.displayName,
            "$" + inp.data[acc].attributes.balance.value,
            inp.data[acc].attributes.accountType,
            inp.data[acc].attributes.createdAt,
         ])
    }
    return dat
}

const mypage = document.querySelector("button");
// myheading.textContent = "Hello World";
mypage.addEventListener("click", () => {
    // let nm = prompt("Please enter your name.");
    let nm = "MAXIBON";
    let pat = prompt("Please enter your UP PAT.");
    localStorage.setItem("name", nm);
    document.getElementById("username").textContent = `USERNAME:  ${nm}`;
    fetch("https://api.up.com.au/api/v1/accounts", {method: "GET", headers: {Authorization: "Bearer " + pat}}).then(
        (resp) => {
            resp.text().then( (raw) => {
                listIntoTable("insersion", extract_account_info(raw));
            }
         );
        }
    );
    // alert("Its UP time!");
});

