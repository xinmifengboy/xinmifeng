export interface Order {
  id: string
  amount: number
  title: string
  status: 'pending' | 'paid' | 'failed'
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
}