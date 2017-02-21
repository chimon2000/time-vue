<style scoped>
  table {
    border: 1px solid #ccc;
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  table tr {
    border: 1px solid #ddd;
    padding: 5px;
  }
  
  table tr.selected {
    font-weight: 500;
    background-color: #f0f0f0;
  }
  
  table tr.selectable {
    cursor: pointer;
  }
  
  table th,
  table td {
    padding: 10px;
    text-align: center;
  }
  
  table th {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }
  
  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }
    table thead {
      display: none;
    }
    table tr {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #ddd;
    }
    table td {
      display: block;
      text-align: right;
      font-size: 13px;
      border-bottom: 1px dotted #ccc;
    }
    table td:last-child {
      border-bottom: 0;
    }
    table td:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
</style>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in tableOptions.headers">{{header.name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" v-bind:class="{ selected: item.selected, 'selectable': tableOptions.selectionMode !== 'none' }"
        @click="onSelectRow(item)">
        <td v-bind:data-label="header.key" v-for="header in tableOptions.headers">
          <span v-if="header.type === 'Date'">{{item[header.key]}}</span>
          <span v-else>{{item[header.key]}}</span>
        </td>
        </tr>
    </tbody>
  </table>
</template>

<script lang="ts" src="./table.ts"></script>