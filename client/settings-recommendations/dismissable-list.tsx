/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { Button, Card, CardHeader } from '@wordpress/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { EllipsisMenu } from '@woocommerce/components';
import { __ } from '@wordpress/i18n';
import { createContext, useContext } from '@wordpress/element';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './dismissable-list.scss';

// using a context provider for the option name so that the option name prop doesn't need to be passed to the `DismissableListHeading` too
const OptionNameContext = createContext( '' );

export const DismissableListHeading: React.FC< {
	onDismiss?: () => void;
} > = ( { children, onDismiss = () => null } ) => {
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const dismissOptionName = useContext( OptionNameContext );

	const handleDismissClick = () => {
		onDismiss();
		updateOptions( {
			[ dismissOptionName ]: 'yes',
		} );
	};

	return (
		<CardHeader>
			<div className="woocommerce-dismissable-list__header">
				{ children }
			</div>
			<div>
				<EllipsisMenu
					label={ __( 'Task List Options', 'woocommerce-admin' ) }
					renderContent={ () => (
						<div className="woocommerce-dismissable-list__controls">
							<Button onClick={ handleDismissClick }>
								{ __( 'Hide this', 'woocommerce-admin' ) }
							</Button>
						</div>
					) }
				/>
			</div>
		</CardHeader>
	);
};

export const DismissableList: React.FC< {
	dismissOptionName: string;
	className?: string;
} > = ( { children, className, dismissOptionName } ) => {
	const isVisible = useSelect( ( select ) => {
		const { getOption, hasFinishedResolution } = select(
			OPTIONS_STORE_NAME
		);

		const hasFinishedResolving = hasFinishedResolution( 'getOption', [
			dismissOptionName,
		] );

		return hasFinishedResolving && getOption( dismissOptionName ) !== 'yes';
	} );

	if ( ! isVisible ) {
		return null;
	}

	return (
		<Card
			size="medium"
			className={ classNames(
				'woocommerce-dismissable-list',
				className
			) }
		>
			<OptionNameContext.Provider value={ dismissOptionName }>
				{ children }
			</OptionNameContext.Provider>
		</Card>
	);
};
