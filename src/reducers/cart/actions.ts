/* eslint-disable prettier/prettier */
import { NavigateFunction } from 'react-router-dom'
import { Item } from './reducer'
import { OrderInfo } from '../../pages/Cart'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export type Actions =
  | {
    type: ActionTypes.ADD_ITEM
    payload: {
      item: Item
    }
  }
  | {
    type:
    | ActionTypes.DECREMENT_ITEM_QUANTITY
    | ActionTypes.INCREMENT_ITEM_QUANTITY
    | ActionTypes.REMOVE_ITEM
    payload: {
      itemId: Item['id']
    }
  }
  | {
    type: ActionTypes.CHECKOUT_CART
    payload: {
      order: OrderInfo
      callback: NavigateFunction
    }
  }

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    }
  } satisfies Actions
}

export function incrimentItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  } satisfies Actions
}

export function decrimentItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  } satisfies Actions
}

export function checkoutCartAction(order: OrderInfo, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    }
  } satisfies Actions
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId
    }
  } satisfies Actions
}
