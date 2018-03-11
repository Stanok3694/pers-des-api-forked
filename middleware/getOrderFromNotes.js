const getOrderFromNotes = (notes) => {
    if (notes) {
        const idx = notes.indexOf('№');
        
        if (idx === -1) {
            return null;
        }

        const order = notes.substring(idx + 1, idx + 3);
        return order.trim();

    } else {
        return null;
    }
};

module.exports = getOrderFromNotes;