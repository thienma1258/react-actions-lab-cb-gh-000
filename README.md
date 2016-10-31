# React Actions Lab

## Overview

In this lab, you'll react to user input in action and pass components as context for actions. 

## React Spreadsheet

In this lesson we are going to write a simple spreadsheet application. Our goal
isn't feature-parity with Microsoft Excel, but it's definitely going to be a lot
fun and there are going to be **lots** of actions.

This is what we're going to build in this lab:

![Screenshot](./assets/Screenshot.png)

Looks complicated? — Don't worry! All our [actions](./components/actions.js)
are already there, we just need to implement them!

At the end of this lab, our spreadsheet application is going to have the
following functionality:

* Users will be able to select cells, the currently selected cell is shown in
  the bottom left hand corner (`5 — 1` in the screenshot).
* The table is dynamic: We can add and remove columns from the able, but there
  will always be a minimum of one cell.
* For obvious reasons, our users are going to be able to select a cell and fill
  it with content.

### Components

Our app consists of the following components:

```
components/
├── Cell.js
├── Row.js
├── Spreadsheet.js
└── Table.js
```

#### `<Cell />`

Each cell represents an individual value in the spreadsheet app / table (e.g.
"San Francisco" or "Weather").

#### `<Row />`

A single horizontal row that has one or more `<Cell />`s within it.

#### `<Spreadsheet />`

The main entry point of our application. A spreadsheet component contains a
single `<Table />`, binds all actions and encapsulates the application state.

#### `<Table />`

A table contains one or more `<Row />` components.

## Actions

Our actions can be found in `actions/index.js`. Each action will be bound
in the `<Spreadsheet />` component.

## Resources

[bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
[Partial function application JavaScript](https://passy.svbtle.com/partial-application-in-javascript-using-bind)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-actions-lab'>React Actions Lab</a> on Learn.co and start learning to code for free.</p>
