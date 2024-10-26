import { defineStore } from 'pinia'

export interface Ticket {
  id: number
  userId: string
  value: number
  statusT: string
  createdAt: string
}

export const useTicketStore = defineStore('ticket', {
  state: () => {
    return {
      count: 0,
      unit: [] as Ticket[],
      selected: [] as number[],
      price: 0,
      rate: 100
    }
  },
  getters: {
    selectedUnit: (state) => {
      return state.selected.length
    },
    totalPrice: (state) => {
      return state.selected.length * state.rate
    }
  },
  actions: {
    increment() {
      this.count++
    },
    add(ticket: number) {
      if (!this.selected.includes(ticket)) {
        this.selected.push(ticket)
      }
    },
    delete(id: number) {
      this.selected = this.selected.filter((num) => num != id)
    },
    deleteAll() {
      this.selected.length = 0
    }
  }
})
