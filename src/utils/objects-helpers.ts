

export const updateObjectInArray = (items: any[], itemId: number, objPropName: string, newObjProps: any) => {
    return items.map(u => u[objPropName] === itemId ? { ...u, ...newObjProps } : u);
};
