import { Paper, Card, CardHeader, CardContent } from "@material-ui/core";
import ProfileSection from "../../components/ProfileSection";
import Searcher from "../../components/Searcher";

const ProfileView = () => {
    return (
        <Paper>
            <Card>
                <CardHeader title="Profile" />
                <CardContent>
                    <Searcher />
                    <ProfileSection />
                </CardContent>
            </Card>
        </Paper>
    );
};

export default ProfileView;
