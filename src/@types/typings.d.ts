interface Food {
	id: number;
	name: string;
	description: string;
	price: string;
	available: boolean;
	image: string;
}

interface ModalCommonProps {
	isOpen: boolean;
	setIsOpen: () => void;
}
