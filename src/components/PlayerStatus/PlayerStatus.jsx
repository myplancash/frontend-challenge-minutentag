/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */

import { useState, useEffect } from "react";
import { StatusContainer, StatusTitle, StatusCount, StatusButton } from './PlayerStatus.styles'

export function PlayerStatus() {
	const [status, setStatus] = useState("Online");
	const [counter, setCounter] = useState(1); // Initialize counter to 1

	// Toggle between the two status values - 'Away' and 'Online'
	function onToggleStatus() {
		//Toggle the status value
		setStatus(status === "Online" ? "Away" : "Online");
	}

	// Implement effect hook below.
	// Update the counter when status changes.
	useEffect(() => {
		// Update the counter when the status changes
		setCounter((prevCounter) => prevCounter + 1);
	}, [status]);

	return (
		<StatusContainer>
			<StatusTitle>{status}</StatusTitle>
			<StatusCount>{counter}</StatusCount>
			<StatusButton onClick={onToggleStatus}>Toggle status</StatusButton>
		</StatusContainer>
	);
}
