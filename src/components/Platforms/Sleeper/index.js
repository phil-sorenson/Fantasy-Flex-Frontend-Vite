const [currentUser, setCurrentUser] = useState(null);
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [sleeperUser, setSleeperUser] = useStet(null);

const [user, token] = useAuth();
const { user_id } = useParams();
