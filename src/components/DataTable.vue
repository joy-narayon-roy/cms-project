<template>
    <section class="wrap">
        <div class="py-3 px-2 data--table">
            <h2 class="data--table_header">Data Table</h2>
            <table class="data--table_table" border="0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Phone</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>26/06/2021</td>
                        <td>01533599629</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>26/06/2021</td>
                        <td>01533599629</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>26/06/2021</td>
                        <td>01533599629</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>26/06/2021</td>
                        <td>01533599629</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>26/06/2021</td>
                        <td>01533599629</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>26/06/2021</td>
                        <td>01533599629</td>
                        <td>10</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:100</td>
                        <td></td>
                        <td>5000tk</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
</template>
<style>
    .wrap {
        display: block;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0.5rem 0;
    }
    .data--table {
        width: 90%;
        margin: 0 auto;
        border-radius: 5px;
        background: #fff;
        color: rgb(94,82,127);
    }
    .data--table_header {
        text-align: center;
        font-weight: bold;
        padding: 5px 0;
        border-bottom: 1px solid #391755;
    }
    .data--table_table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        font-size: 1.01rem;
    }
    .data--table_table thead {
        background: #57B3F1;
        color: #fff;
        border-radius: 5px;
    }
    .data--table_table tbody tr:nth-child(even) {
        background: #DDF0FC;
    }
    .data--table_table tbody tr:hover {
        background: #787878;
        color: #fff;
    }
    .data--table_table tfoot {
        background: #148395;
        color: #fff;
    }
</style>
<script>
    export default {
        name: 'Data Form',
        props: {},
        data() {},
        methods: {}
    }
    </script>