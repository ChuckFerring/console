export interface WinkLastReading {
    connection: boolean;
    connection_updated_at: number;
    agent_session_id: string;
    agent_session_id_updated_at: number;
    pairing_mode?: any;
    pairing_mode_updated_at: number;
    pairing_prefix?: any;
    pairing_prefix_updated_at?: any;
    kidde_radio_code_updated_at: number;
    pairing_mode_duration: number;
    pairing_mode_duration_updated_at: number;
    updating_firmware: boolean;
    updating_firmware_updated_at: number;
    firmware_version: string;
    firmware_version_updated_at: number;
    update_needed: boolean;
    update_needed_updated_at: number;
    mac_address: string;
    mac_address_updated_at: number;
    ip_address: string;
    ip_address_updated_at: number;
    hub_version: string;
    hub_version_updated_at: number;
    remote_pairable?: any;
    remote_pairable_updated_at?: any;
    local_control_public_key_hash: string;
    local_control_public_key_hash_updated_at: number;
    local_control_id: string;
    local_control_id_updated_at: number;
    desired_pairing_mode_updated_at: number;
    desired_pairing_prefix_updated_at: number;
    desired_kidde_radio_code_updated_at: number;
    desired_pairing_mode_duration_updated_at: number;
    desired_kidde_radio_code_changed_at: number;
    update_needed_changed_at: number;
    connection_changed_at: number;
    kidde_radio_code_changed_at: number;
    pairing_mode_duration_changed_at: number;
    desired_pairing_mode_changed_at: number;
    updating_firmware_changed_at: number;
    agent_session_id_changed_at: number;
    hub_version_changed_at: number;
    firmware_version_changed_at: number;
    mac_address_changed_at: number;
    ip_address_changed_at: number;
    desired_pairing_prefix_changed_at: number;
    desired_pairing_mode_duration_changed_at: number;
    local_control_public_key_hash_changed_at: number;
    local_control_id_changed_at: number;
    pairing_mode_changed_at: number;
    firmware_date_code: string;
    firmware_date_code_updated_at?: number;
    powered?: boolean;
    powered_updated_at?: number;
    brightness?: number;
    brightness_updated_at?: number;
    desired_powered_updated_at?: number;
    desired_brightness_updated_at?: number;
    powered_changed_at?: number;
    brightness_changed_at?: number;
    firmware_date_code_changed_at?: number;
    desired_powered_changed_at?: number;
    desired_brightness_changed_at?: number;
    desired_powered?: any;
    position?: any;
    position_updated_at?: number;
    desired_position_updated_at?: number;
    desired_position_changed_at?: number;
}