<template>
    <table>
        <thead>
            <tr>
                <th v-for="(dh, dhid) in data.dhead" :key="dhid">
                    {{dh}}
                </th>
            </tr>   
        </thead>
        <tbody>
            <tr v-for="(dr, drid) in data.ddata" :key="drid">
                <td v-for="(dc, dcid) in dr" :key="dcid">
                    {{dc}}
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>
                    Total
                </td>
                <td v-for="i in (data.ddata[0].length-2)" :key="i">
                </td>
                <td>
                    {{sumTotal}}
                </td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
export default {
    data(){
        return{
            data: {
                dhead: [
                    "Nama Produk", "Harga/Kg", "Kuantitas", "Total"
                ],
                ddata: [
                    ["Udang", 20, 10, 200],
                    ["Udang", 20, 10, 200],
                    ["Udang", 20, 10, 200],
                ]
            },
        }
    },
    computed:{
        sumTotal(){
            let dlen = this.data.ddata[0].length-1
            let total = 0
            for(let data of this.data.ddata){
                total += data[dlen]
            }
            return total
        }
    }
}
</script>

<style scoped>
    table, th, td{
        border: 1px solid black;
    }
</style>

