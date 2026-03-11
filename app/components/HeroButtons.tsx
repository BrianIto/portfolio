import GlowingTag from "./GlowingTag";

interface Props {
	onClickPrimary?: () => void;
	onClickSecondary?: () => void;
}

const HeroButtons: React.FC<Props> = ({
	onClickPrimary = () => {},
	onClickSecondary = () => {},
}) => {
	return (
		<div className="w-fit flex items-center justify-center gap-2 md:gap-8 mt-12 mx-auto">
			<div className="button">
				<GlowingTag onClick={onClickPrimary} size="lg">
					Let's build something
				</GlowingTag>
			</div>
			<button onClick={onClickSecondary} className="button px-3 py-3">
				see what i can do first.
			</button>
		</div>
	);
};

export default HeroButtons;
