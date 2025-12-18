export const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Bỏ dấu
        .replace(/[^a-z0-9\s-]/g, "") // Chỉ giữ chữ, số, space, dấu -
        .trim()
        .replace(/\s+/g, "-") // Thay space bằng -
        .replace(/-+/g, "-"); // Loại bỏ dấu - trùng
};
