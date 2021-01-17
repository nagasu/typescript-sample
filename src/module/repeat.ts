import build from '@/module/build'

export default (number: number): string => {
    let queue = []
    const value = build()
    for(let i = 0; i < number; i++) {
        queue.push(value)
    }

    return queue.join(',')
}