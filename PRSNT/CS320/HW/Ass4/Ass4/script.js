/*******************************************************************
*                         Image Map Actions                        * 
*                                                                  *
*   PROGRAMMER: Ines Constant                                      *
*   COURSE: CS320                                                  *
*   DATE: 3/24/2024                                                *
*   REQUIREMENT: Assignment 4                                      *
*                                                                  *
*   DESCRIPTION:                                                   *
*   The following program uses JavaScript functions that an HTML   *
*   webpage calls to execute various actions.                      *
*                                                                  *
*   COPYRIGHT: This code is copyright (C) 2024 Ines Constant       *
*   and Dean Zeller.                                               *
*                                                                  *
*   CREDITS: This code was written with the help of ChatGPT.         *
*                                                                  *
*******************************************************************/

/**********************************************************
*   METHOD: piecesDisplay()                               *
*   DESCRIPTION: get the current region name and display  *
*   to user.                                              *
*   PARAMETERS: altInfo                                   *
*   RETURN VALUE: alert message with alt information.     *
**********************************************************/

function piecesDisplay(altInfo) {
  alert("clicked on piece " + altInfo);
}

/**********************************************************
*   METHOD: boardDisplay()                               *
*   DESCRIPTION: get the current region name and display  *
*   to user.                                              *
*   PARAMETERS: altInfo                                   *
*   RETURN VALUE: alert message with alt information.     *
**********************************************************/

function boardDisplay(altInfo) {
  alert("clicked on square " + altInfo);
}