function calculateTotalSpentByCategory(transactions) {
    let ans = []

    for (let i = 0; i < transactions.length; i++) {
        let category = transactions[i].category
        let totalspent = 0
        for (let j = i; j < transactions.length; j++) {
            if (category == transactions[j].category) {
                totalspent = totalspent + transactions[j].price
            }
        }
        let count = 0
        for (let k = 0; k < ans.length; k++) {
            if (ans[k].category == category) {
                count = 1
            }
        }
        if (count == 0) {
            ans.push({category, totalspent})
        }  
    }
    return ans
}


const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

const result =
    calculateTotalSpentByCategory(transactions);

    console.log(result)

