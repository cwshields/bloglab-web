import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import FormTabModal from "../../components/FormTabModal/FormTabModal";
import "../../sass/Settings.scss";

const PREFERENCES_STORAGE_KEY = "bloglab-settings-preferences";

const DEFAULT_PREFERENCES: SettingsPreferences = {
  emailOnComment: true,
  weeklyDigest: false,
  showEmailPublicly: false,
  showActivityPublicly: true,
};

function readStoredPreferences(): SettingsPreferences {
  const stored = localStorage.getItem(PREFERENCES_STORAGE_KEY);
  return stored
    ? { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) }
    : DEFAULT_PREFERENCES;
}

export default function Settings() {
  const { user, updateUser } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [preferences, setPreferences] = useState<SettingsPreferences>(
    readStoredPreferences,
  );
  const [profileForm, setProfileForm] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    username: user?.username ?? "",
    email: user?.email ?? "",
    avatar: user?.avatar ?? "",
    location: user?.location ?? "",
    education: user?.education ?? "",
    work: user?.work ?? "",
    description: user?.description ?? "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const handlePreferenceToggle = (key: keyof SettingsPreferences) => {
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  };

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setProfileForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUser(profileForm);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!user) {
    return (
      <div className="settings-wrap">
        <div className="jumbotron display-center">
          <div>
            <p>Log in to manage your settings.</p>
            <Button variant="success" onClick={() => setShowLoginModal(true)}>
              Log In
            </Button>
          </div>
        </div>
        <FormTabModal
          show={showLoginModal}
          onHide={() => setShowLoginModal(false)}
        />
      </div>
    );
  }

  return (
    <div className="settings-wrap">
      <h2>Settings</h2>

      <div className="preferences-card">
        <h3>Preferences</h3>
        <Form.Check
          type="checkbox"
          id="pref-email-on-comment"
          label="Email me when someone comments on my posts"
          checked={preferences.emailOnComment}
          onChange={() => handlePreferenceToggle("emailOnComment")}
        />
        <Form.Check
          type="checkbox"
          id="pref-weekly-digest"
          label="Send me a weekly digest of top blogs"
          checked={preferences.weeklyDigest}
          onChange={() => handlePreferenceToggle("weeklyDigest")}
        />
        <Form.Check
          type="checkbox"
          id="pref-show-email"
          label="Show my email address on my public profile"
          checked={preferences.showEmailPublicly}
          onChange={() => handlePreferenceToggle("showEmailPublicly")}
        />
        <Form.Check
          type="checkbox"
          id="pref-show-activity"
          label="Show my blogs and comments on my public profile"
          checked={preferences.showActivityPublicly}
          onChange={() => handlePreferenceToggle("showActivityPublicly")}
        />
      </div>

      <div className="profile-form-card">
        <h3>Profile Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={profileForm.firstName}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profileForm.lastName}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profileForm.username}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileForm.email}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Avatar URL</label>
            <input
              type="text"
              name="avatar"
              value={profileForm.avatar}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={profileForm.location}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Education</label>
            <input
              type="text"
              name="education"
              value={profileForm.education}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Work</label>
            <input
              type="text"
              name="work"
              value={profileForm.work}
              onChange={handleFieldChange}
            />
          </div>
          <div className="input-wrap">
            <label>Bio</label>
            <textarea
              name="description"
              rows={3}
              value={profileForm.description}
              onChange={handleFieldChange}
            />
          </div>
          {saved && <div className="save-success">Changes saved.</div>}
          <Button variant="success" type="submit" className="save-btn">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}
