export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

// Função para buscar todos os produtos
export const fetchProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    const data: ProductType[] = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return []; // Retorna uma lista vazia em caso de erro
  }
};

// Função para buscar um produto específico por ID
export const fetchProduct = async (id: string | number): Promise<ProductType | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    const data: ProductType = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao buscar o produto com ID ${id}:`, error);
    return null; // Retorna null em caso de erro
  }
};
